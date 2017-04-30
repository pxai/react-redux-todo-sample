var UsualTags =  {
    componentWillMount: function() {
        console.log('Mixin> UsualTags umount');
        this.tags = [];
    },
    add: function(tag) {
        this.tags.push(tag);
    },
    componentWillUnmount: function() {
        console.log('Mixin> UsualTags umount');
    }
};

module.exports = UsualTags;