// Simple mixin sample
var StringMixin =  {
    trim: function(text) {
        return text.replace(/^[/s/t]*|[/s/t]*$]/g,'');
    },
    uppercaseFirst: function(text) {
        if (text.length > 0) {
            return text.substr(0, 1).toUpperCase() + (text.length > 1)?text.substr(1, text.length).toLocaleLowerCase():'';
        } else {
            return '';
        }
    }
};

module.exports = StringMixin;
