const WOFF_ID = "Gb06_5WrOvf5v40zzrEZnQ"

woff
    .init({
        woffId: WOFF_ID
    })
    .then(() => {
        const message = document.querySelector("#message")
        message.textContent = "in woff.init().then()"
    })
    .catch((err) => {
        console.log(err.code, err.message);
    })
