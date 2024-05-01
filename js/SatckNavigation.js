class StackNavigation {
    constructor() {
        this.forwardSatck = [];
        this.backwordStack = [];
        this.currentUrl = ""
    }
    addNewUrl(url) {
        if (this.currentUrl) {
            this.backwordStack.push(this.currentUrl)
        }
        this.currentUrl = url
    }

    goBackWard() {
        if (!this.backwordStack.length) {
            return;
        }
        this.forwardSatck.push(this.currentUrl);
        this.currentUrl = this.backwordStack.pop();
    }

    goForward() {
        if (!this.forwardStack.length) {
            return;
        }
        this.backwordStack.push(this.currentUrl);
        this.currentUrl = this.forwardSatck.pop();
    }

    getCurrentUrl(){
        return this.currentUrl;
    }
    getState(){
        return {backward:this.backwordStack,forward:this.forwardSatck}
    }
}

let sn = new StackNavigation();
sn.addNewUrl("google.com")
sn.addNewUrl("yahoo.com")
sn.getCurrentUrl();
sn.goBackWard();
sn.getCurrentUrl();
