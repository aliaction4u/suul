async function pay(food, price) {

    try {

        const response = await fetch("/.netlify/functions/pay", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                food: food,

                amount: Number(price)

            })

        });

        const data = await response.json();

        console.log(data);

        if (data.checkout_url) {

            window.location.href = data.checkout_url;

        } else {

            alert("Payment failed");

        }

    } catch(error) {

        console.error(error);

        alert("Network error");

    }

}