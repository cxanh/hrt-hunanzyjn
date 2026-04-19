// ==UserScript==
// @name         Chinahrt Autoplay (Iframe & Anti-Detection)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  针对 iframe 嵌套和三重暂停机制的深度优化
// @match        https://*.chinahrt.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // --- 策略 A: 彻底阻断失焦和隐藏事件 (关键) ---
    const blockEvents = () => {
        // 1. 劫持 visibilityState
        Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
        Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });

        // 2. 拦截并杀死所有会导致暂停的事件传播
        const eventsToBlock = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focusout'];
        eventsToBlock.forEach(eventName => {
            window.addEventListener(eventName, (e) => {
                e.stopImmediatePropagation();
            }, true);
        });

        // 3. 针对某些播放器劫持 window.onblur
        window.onblur = null;
        document.onvisibilitychange = null;
    };

    // --- 策略 B: 视频接管逻辑 ---
    const handleVideo = (video) => {
        if (!video) return;

        // 强制设置属性
        video.muted = true;

        // 防止视频被第三方代码手动暂停
        video.addEventListener('pause', () => {
            // 如果不是因为结束而暂停，则恢复播放
            if (!video.ended) {
                video.play().catch(() => {});
            }
        });

        // 定时确保播放状态
        setInterval(() => {
            if (video.paused && !video.ended) video.play().catch(() => {});
            
        }, 2000);
    };

    // --- 策略 C: 跨域/嵌套查找 ---
    // 因为设置了 @match 且脚本默认在所有 iframe 运行，所以 video 理论上能在某个 context 中直接搜到
    const init = () => {
        blockEvents();

        const checkTimer = setInterval(() => {
            const video = document.querySelector('video');
            if (video) {
                console.log("找到视频对象，开始接管...");
                handleVideo(video);
                // 找到后可以不用清除，持续监控
            }
        }, 2000);
    };

    init();
})();