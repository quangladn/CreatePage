function runTest() {
    let codeOutput = document.querySelector(".output").contentWindow.document
    const css = "<style>" + document.getElementById("css").value + "</style>"
    const html = document.getElementById("html").value
    const js_ = "<script>" + document.getElementById("js").value + "</script>"

    codeOutput.open()
    codeOutput.write(html+css+js_)
    codeOutput.close()
}