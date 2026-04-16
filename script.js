const WOFF_ID = "Gb06_5WrOvf5v40zzrEZnQ"

woff
    .init({
        woffId: WOFF_ID
    })
    .then(() => {
        const message = document.querySelector("#message")
        message.textContent = "in woff.init().then()"

        const { domainId, userId, displayName } = woff.getProfile()
        woff.getProfile().then(({ domainId, userId, displayName }) =>
            message.textContent = [domainId, userId, displayName].join(" / "))


        document.querySelector("#token").textContent = woff.getAccessToken()

    })
    .catch((err) => {
        console.log(err.code, err.message);
    })



async function apiAccess() {
    document.querySelector("#response").textContent = "button pushed " + `Bearer ${woff.getAccessToken()}`

    const response = await fetch("https://www.worksapis.com/v1.0/bots",
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${woff.getAccessToken()}`
            }
        }
    )

    if (!response.ok) {
        document.querySelector("#response").textContent = "Error!!!"

    } else {
        document.querySelector("#response").textContent = "response.ok"
        const result = await response.json();
        document.querySelector("#response").textContent = JSON.stringify(result)
    }

}