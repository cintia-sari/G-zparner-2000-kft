const writeToUs = document.querySelector(".write-to-us-js");
const otherContact = document.querySelector(".other-contact-js");
const connectionMap = document.querySelector(".connection-map-js");
const address = document.querySelector(".address-js");

function addEmailBox(){
    let html =`
    <div class="email-box">
        <div class="email">
            <form action="#" method="post" class="contact-contanier">
                <div class="input-group">
                    <input 
                        required
                        type="text"
                        name="name"
                        id="name-id"
                        autocomplete="off"
                        class="input">
                        <label class="user-label" for="name-id">Your Name:</label>
                </div>
                <div class="input-group">
                    <input 
                        required
                        autocomplete="off"
                        class="input"
                        type="email"
                        name="name"
                        id="email-id">
                        <label class="user-label" for="email-id">Your E-mail:</label>
                </div>
                <div class="input-group">
                        <textarea
                        required
                        name="message"
                        autocomplete="off"
                        class="input"
                        ></textarea>
                        <label class="user-label">Message:</label>
                </div>
                <div class="email-button-div">
                    <button class="button email-button" type="submit" value="SUBMIT">SUBMIT</button>  
                </div>
            </form>
        </div>  
    </div>`;
    return html
}

function addOtherOptionBox (){
    html = `
                <div class="egyéb-elérhetőség-container">
                    <div class="egyéb-elérhetőség-div">
                        <h3 class="kapcsolat-név">Molnár Gábor:</h3>
                        <h4 class="kapcsolat-elérhetőség">+36-20-9451542</h4>
                        <h4 class="kapcsolat-elérhetőség">molnargabor.@gazpartner.axelero.net</h4>
                    </div>
                    <div class="egyéb-elérhetőség-div">
                        <h3 class="kapcsolat-név">Sári István:</h3>
                        <h4 class="kapcsolat-elérhetőség">+36-20-9278466</h4>
                        <h4 class="kapcsolat-elérhetőség">sariistván.@gazpartner.axelero.net</h4>
                    </div>
                    <div class="egyéb-elérhetőség-div">
                        <h3 class="kapcsolat-név">Molnár Gáborné:</h3>
                        <h4 class="kapcsolat-elérhetőség">+36-20-9896855</h4>
                        <h4 class="kapcsolat-elérhetőség">andrea.molnár@gazpartner.axelero.net</h4>
                    </div>
                    <div class="egyéb-elérhetőség-div">
                        <h3 class="kapcsolat-név">Sebők Dávid:</h3>
                        <h4 class="kapcsolat-elérhetőség">+36-20-9896853</h4>
                    </div>
                    <div class="egyéb-elérhetőség-div">
                        <h3 class="kapcsolat-név">Egyéb:</h3>
                        <h4 class="kapcsolat-elérhetőség">gazpartner@t-online.hu</h4>
                        <h4 class="kapcsolat-elérhetőség">06-96-556-084</h4>
                        <h4 class="kapcsolat-elérhetőség">06-96-447-560</h4>
                    </div>
                </div>
             
            `;
    return html

}

function addMap () {
    let html =`
    <div class="map-container">
    <h3>9012   Győr,  Aba Sámuel út. 26.</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10753.761877948864!2d17.6121787!3d47.6370068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bc034f4b30b47%3A0x7d66789eed9b8ec4!2sG%C3%A1z-Partner%202000%20Kft.!5e0!3m2!1shu!2shu!4v1679053574543!5m2!1shu!2shu"
    >
     </iframe>
     </div>
    `;

    return html;
}

connectionMap.innerHTML= addEmailBox();


writeToUs.addEventListener("click", function(){
    connectionMap.innerHTML= addEmailBox();
})

otherContact.addEventListener("click", function() {
    connectionMap.innerHTML= addOtherOptionBox();
})

address.addEventListener("click", function(){
    connectionMap.innerHTML= addMap();
})

