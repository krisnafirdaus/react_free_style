const { default: src } = require("*.bmp");

module.exports = {
    settings: [
        "import/resolver": {
            node: {
                paths: ['src']
            }
        } 
    ]
}