
$("form").submit(function (e) {
    e.preventDefault();

    const pixelPitch = $("#pixel-pitch").val()

    const cbSizeWidth = $("#cabinet-size-width").val()
    const cbSizeHeight = $("#cabinet-size-height").val()

    const screenDimensionWidth = $("#screen-dimension-width").val()
    const screenDimensionHeight = $("#screen-dimension-height").val()

    const lampType = $("#lamp-type").val()

    const cbCountWidth = $("#cabinet-count-width").val()
    const cbCountHeight = $("#cabinet-count-width").val()

    const screenArea = screenDimensionHeight * screenDimensionWidth

    const cbResX = (cbSizeWidth / pixelPitch)
    const cbResY = (cbSizeHeight / pixelPitch)
    const cabinetResolution = cbResX.toFixed(5) + " x " + cbResY.toFixed(5)

    const srx = (cbCountWidth * cbResX)
    const sry = (cbCountHeight * cbResY)
    const screenResolution = srx.toFixed(5) + " x " + sry.toFixed(5)


    $("#result").show()
    $("#screen-resolution").html(screenResolution)
    $("#cabinet-resolution").html(cabinetResolution)
    $("#screen-area").html(screenArea)
    $("#lamp-type-res").html(lampType)

    $("#download").click(function (){
        print(screenArea,screenResolution,cabinetResolution,lampType)
    })
})

function print(screenArea,screenResolution,cabinetResolution,lampType){
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();

    doc.text("screen area: "+screenArea, 10, 10);
    doc.text("screen resolution: "+screenResolution, 10, 20);
    doc.text("cabinet resolution: "+cabinetResolution, 10, 30);
    doc.text("lamp type: "+lampType, 10, 40);
    doc.save("print.pdf");
}
