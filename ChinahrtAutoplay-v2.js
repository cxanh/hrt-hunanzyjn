// ==UserScript==
// @name         Chinahrt 综合测试工具 (自动播放 + 人脸绕过)
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  安全测试专用：自动播放视频 + 一键绕过活体人脸识别。仅限授权审计使用。
// @match        https://*.chinahrt.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // ===================== 模块一：防挂机自动播放 =====================
  const AntiPauseModule = {
    // 阻断页面失焦事件，防止视频暂停
    blockVisibilityEvents: function () {
      // 劫持文档可见性属性
      Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
      Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });

      // 拦截导致暂停的事件
      const events = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focusout'];
      events.forEach(ev => {
        window.addEventListener(ev, e => e.stopImmediatePropagation(), true);
      });

      // 清除旧式事件监听
      window.onblur = null;
      document.onvisibilitychange = null;
    },

    // 接管视频元素，确保一直播放
    takeOverVideo: function (video) {
      if (!video) return;
      video.muted = true; // 静音以避免策略限制

      // 防止手动或脚本暂停
      video.addEventListener('pause', () => {
        if (!video.ended) video.play().catch(() => { });
      });

      // 定时巡检，保持播放状态
      setInterval(() => {
        if (video.paused && !video.ended) {
          video.play().catch(() => { });
        }
      }, 2000);
    },

    // 启动视频接管扫描
    start: function () {
      this.blockVisibilityEvents();
      const scan = setInterval(() => {
        const video = document.querySelector('video');
        if (video) {
          console.log('[自动播放] 检测到视频，开始接管。');
          this.takeOverVideo(video);
          clearInterval(scan);
        }
      }, 2000);
    }
  };

  // ===================== 模块二：人脸识别绕过 =====================
  const FaceBypassModule = {
    // 等待 userFace 对象出现并劫持
    start: function () {
      console.log('[人脸绕过] 等待 userFace 对象加载...');
      const checkInterval = setInterval(() => {
        if (typeof window.userFace !== 'undefined') {
          console.log('[人脸绕过] 捕获 userFace，执行劫持。');
          this.injectBypass();
          clearInterval(checkInterval);
        }
      }, 500);
    },

    injectBypass: function () {
      const userFace = window.userFace;

      // 1. 劫持 getPhoto —— 直接模拟验证成功
      const originalGetPhoto = userFace.getPhoto;
      userFace.getPhoto = function () {
        console.log('[人脸绕过] getPhoto 被调用，已跳过动作检测。');

        // 模拟成功提示
        if (typeof layer !== 'undefined') {
          layer.msg('人脸识别通过（测试模式），请点击确认继续。');
        }

        // 显示确认按钮
        const btn = document.getElementById('faceRecognitionConfirmButton');
        if (btn) btn.style.display = 'block';

        // 抓拍占位图
        const img = document.querySelector('.imgbox img');
        if (img) img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

        // 关闭摄像头
        this.closeFace();
      };

      // 2. 劫持 drawLoop —— 停止一切动作检测
      userFace.drawLoop = function () {
        // 保持动画循环但不做检测
        if (typeof requestAnimFrame !== 'undefined') {
          requestAnimFrame(this.drawLoop.bind(this));
        }
        if (this.overlayCC) {
          this.overlayCC.clearRect(0, 0, this.vid_width, this.vid_height);
          this.overlayCC.font = '20px Arial';
          this.overlayCC.fillStyle = '#00AA00';
          this.overlayCC.fillText('✓ 测试模式 - 已绕过', 10, 50);
        }
        // 不调用 ctrack 的任何方法，完全跳过特征点计算
      };

      // 3. 劫持 init —— 直接触发通过
      const originalInit = userFace.init;
      userFace.init = function () {
        console.log('[人脸绕过] 初始化被拦截，直接模拟成功。');
        setTimeout(() => this.getPhoto(), 300);
      };

      // 4. 锁定 faceFlag 避免进入原逻辑分支
      Object.defineProperty(userFace, 'faceFlag', {
        get: () => 'bypass',
        set: () => { },
        configurable: true
      });

      // 如果此时已经正在进行人脸识别，立即触发
      if (userFace.trackingStarted) {
        userFace.getPhoto();
      }

      console.log('[人脸绕过] 劫持完成。');
    }
  };

  // ===================== 统一启动 =====================
  // 由于使用 document-start，需要等待 DOM 基础结构就绪
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      AntiPauseModule.start();
      FaceBypassModule.start();
    });
  } else {
    AntiPauseModule.start();
    FaceBypassModule.start();
  }

  // 额外监听可能的 iframe 嵌套情况（油猴脚本默认在顶层和所有 iframe 中运行）
  console.log('[综合测试工具] 已加载，等待页面元素...');
})();