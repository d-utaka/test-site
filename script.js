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
    const response = await fetch("https://www.worksapis.com/v1.0/bots",
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${woff.getAccessToken()}`
            }
        }
    )

    const result = await response.json();
    document.querySelector("#response").textContent = result

}