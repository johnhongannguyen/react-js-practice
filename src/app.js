console.log('scripts/app.js is running');

let userMsg = false;
let myTimer; 


let sysTimer = () => {
    if(userMsg){
        userMsg = false;
    }
    else {
        clearInterval(myTimer);
        messages.innerHTML = "";
    }
}
// JSX - JavaScript XML

//*************************************************** */
//                   OBJECT SECTION                   //
//*************************************************** */

let user = {
    name:'Jane',
    age: 22,
    location: 'Vancouver Dungeon - Floor 35',
    gold: 35,
    silver: 75,
    health: 75,
    maxHealth: 190,
    stamina: 150,
    maxStamina: 500
}

//*************************************************** */
//                   HUD SECTION                   //
//*************************************************** */

let renderHUD = () =>{

let HUD = (
    <div>
        <h2>Practicing JSX code</h2>
        <p>This is JSX from app.js rendering information stored in an object</p>
        <ul>
            <li>Character Name: {user.name}</li>
            <li>Character Age: {user.age}</li>
            <li>In-Game Location: {user.location}</li>
            <li>Remaining Health: {user.health + '/' +user.maxHealth}</li>
            <li>Remaining Stamina: {user.stamina + '/' + user.maxStamina}</li>
            <li>Account Balance: {user.gold} Gold; {user.silver} Silver</li>
        </ul>
    </div>
);

ReactDOM.render(HUD, hudContainer);
}



renderHUD(); 


//*************************************************** */
//                   HEALTH SECTION                   //
//*************************************************** */


let addHealth = () => {
    if(user.health < user.maxHealth -10) {
        user.health += 10; 
        user.gold -= 10; 

        renderHUD();
        renderUpdateHealth();

        messages.innerHTML = "Extra Health Added - Account Charged 10 Gold"
        console.log(user.gold, user.health);
        userMsg = true;
        myTimer = setInterval(sysTimer, 3000);
    }
};

const renderUpdateHealth = () => {
    let updateHealth = (
        <div>
            <h2>purchase Additional Health</h2>
            <p>Add to your Health ( 10 gold for 10 HP)
                <button disabled={user.gold < 10} onClick={addHealth}>
                    {user.gold >= 10 ? 'Click to Add' : 'Insufficient Funds'}

                </button>
            </p>
        </div>
    );
    ReactDOM.render(updateHealth, healthContainer);
};
renderUpdateHealth();