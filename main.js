const body = document.querySelector('body')
const textDiv = document.createElement('div')
const imageDiv = document.createElement('div')

body.append(textDiv)
body.append(imageDiv)

let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = Math.floor(Math.random() * 2)
           return this.state
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 0) {
               return textDiv.append('Heads ')
           } 
           else {
               return textDiv.append('Tails ')
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = './images/coin_heads.png'
        } else {
            image.src = './images/coin_tails.png'
        }
        return imageDiv.append(image)
    }
}

function display20Flips(showAsText) {
    for (let index = 0; index < 20; index++) {
        showAsText.flip()
        showAsText.toString()
    }
}
display20Flips(coin)

function display20Images(showAsImage) {
    for (let index = 0; index < 20; index++) {
        showAsImage.flip()
        showAsImage.toHTML()
    }
}
display20Images(coin)