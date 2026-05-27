exports.handler = async function(event) {
    try {
        const body = JSON.parse(event.body);
        const food = body.food;
        const amount = body.amount;
        const response = await fetch(
            "https://api.shegerpay.com/api/v1/checkout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer sk_live_z-BcbvB8sXSI9AZIZBODerUdf1AF1Jc"
                },
                body: JSON.stringify({
                    amount: amount,
                    currency: "ETB",
                    description: food
                })
            }
        );
        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message

            })

        };

    }

}
