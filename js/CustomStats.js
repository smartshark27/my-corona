class CustomStats {
  constructor(postcode, x = 0) {
    this.postcode = postcode;
    this.x = x;
    this.draw();
  }

  draw() {
    this.drawTitle();
    this.activeCasesText = this.drawText(80);
    this.totalCasesText = this.drawText(110);
    this.newCasesText = this.drawText(140);
    this.dateUpdatedText = this.drawText(170);
  }

  drawTitle() {
    SVG.new("text")
      .setAttribute("dominant-baseline", "hanging")
      .setAttribute("text-anchor", "start")
      .setAttribute("x", this.x)
      .setAttribute("y", 10)
      .setAttribute("font-size", 30)
      .setAttribute("fill", "Black")
      .setTextContent(`Cases at ${this.postcode}`)
  }

  drawText(y) {
    return SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "start")
      .setAttribute("x", this.x)
      .setAttribute("y", y)
      .setAttribute("style", "")
      .setAttribute("font-size", 20)
      .setAttribute("fill", "Black")
      .setTextContent(`Loading data`);
  }

  setStats(activeCases, totalCases, newCases, dateUpdated) {
    this.activeCasesText.setTextContent(`Active Cases: ${activeCases}`);
    this.totalCasesText.setTextContent(`Total Cases: ${totalCases}`);
    this.newCasesText.setTextContent(`New Cases: ${newCases}`);
    this.dateUpdatedText.setTextContent(`Date Updated: ${dateUpdated}`);
  }
}
