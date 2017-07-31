function ClozeCard (text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;
        this.partial = text.replace(cloze, "...");
        if (this.partial === text) {
            this.partial = "  Error: '" + cloze + "' is not a part of '" + text + "'";
        }
    } else {
        return new ClozeCard (text, cloze);
    }
}

module.exports = ClozeCard;