const WOFF_ID = "Gb06_5WrOvf5v40zzrEZnQ"

woff
    .init({
        woffId: WOFF_ID
    })
    .then(() => {
        const message = document.querySelector("#message")
        message.textContent = "in woff.init().then()"

        const { domainId, userId, displayName } = woff.getProfile()
        message.textContent = [domainId, userId, displayName].join(" / ")

        document.querySelector("#token").textContent = woff.getAccessToken()

    })
    .catch((err) => {
        console.log(err.code, err.message);
    })
