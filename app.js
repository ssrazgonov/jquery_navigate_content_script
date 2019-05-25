var Help = function() {

    this.$navigate =  $(".help .help__navigate a");

    var that = this;

    this.events = function(){

        this.$navigate.on('click', function(){
            var $target = $(this).data('target');
            that.openContent($target);
            that.activateLink($(this), ".help .help__navigate a");
            return false;
        });
    };

    this.openContent = function ($target) {
        var $target = $($target);
        this.closeAllContent();
        $target.addClass('active');
    };

    this.closeAllContent =  function () {
        var $target = $('.help .help__content');
        $target.removeClass('active');
    };

    this.activateLink =  function ($target, all) {
        var $all = $(all);
        $all.removeClass('active');
        $target.addClass('active');
    };

    this.activateLinkFromParam =  function (target, all) {
        var $all = $(all);
        var $target = $(all+"[data-target='"+target+"']");
        $all.removeClass('active');
        $target.addClass('active');
        this.scrollTo();
    };

    this.scrollTo =  function ( target ) {
        if(!target){
            target = 'top';
        }

        if(target == 'top'){
            $('html,body').animate({scrollTop: 0},'slow');
        }else {
            var $target = $(target);
            $('html,body').animate({scrollTop: $target.offset().top},'slow');
        }
    };

    this.openAllContent = function () {
        $('.help__content').addClass('active');
    };


};

var help = new Help();
help.events();