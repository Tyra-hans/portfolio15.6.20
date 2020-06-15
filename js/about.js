(function($) {
    $(document).ready(function() {
        $.jScrollability([
            {
                'selector': '.slide-in-demo',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 20,
                        'end': 0,
                        'unit': '%'
                    }
                }
            }
        ]);
    });
})(jQuery);