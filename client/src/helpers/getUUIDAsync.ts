export const getUUIDAsync = async () => {
    return new Promise((resolve) => {
        import('@fingerprintjs/fingerprintjs')
            .then(FingerprintJS => FingerprintJS.load())
            .then(fp => fp.get())
            .then(result => {
                const visitorId = result.visitorId
                resolve(visitorId)
            })
    })
}