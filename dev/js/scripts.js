new fullpage('#fullPage', {

    // page navigation
    autoScrolling:true,
    navigation:true,
    scrollingSpeed:1000,

    // slide navigation
    controlArrows:false,
    slidesNavigation:true,
    loopHorizontal:true,

    // a fixed element over every screen
    fixedElements: '#element1',

    // Continuous Vertical scrolling
    continuousVertical:true,

    // showing tooltips on nav circles
    navigationTooltips:['PASSYUNK', 'THE AVE', 'OLD SCHOOL', 'UP AND COMING', 'TIMELESS', 'MAP'],
    showActiveTooltip:true,

    // pages which go beyond the viewport height
    scrollOverflow:true,
    scrollOverflowReset:true
});
