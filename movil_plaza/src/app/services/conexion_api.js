const apiUrl = "http://10.7.3.142:3000/"

const apiService = {
    async fetchData(method, url, body, auth) {
        try {
            const fetched = await fetch(`${ apiUrl }${ url }`,
                {
                    method: method,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: auth ? auth : undefined,
                    },
                    body: body ? JSON.stringify(body) : undefined,
                });

            const responseData = await fetched.json();
            console.log (responseData)
            return {
                status: fetched.status,
                data: responseData,
            };
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default apiService;