let counterIndex = 0;
const notifications = [
	{
		name: "Linde",
		avatar: "https://cdn.ticketswap.com/public/201606/cb14645d-2b71-439d-92b6-feefd0e16c26.png",
		event: "Awakenings Festival 2017",
		tickets: 4
	},
	{
		name: "Koen",
		avatar: "https://cdn.ticketswap.com/public/201604/9887d946-47a1-4e01-881b-6a33076c4de8.jpeg",
		event: "Welcome to the Future - Indoor Day Festival 2017",
		tickets: 2
	},
	{
		name: "Julie",
		avatar: "https://cdn.ticketswap.com/public/201703/569309fc-2e3c-41c9-8e1a-36dcc63858b2.png",
		event: "Toffler Indoor Festival 2017",
		tickets: 1
	},
	{
		name: "Pascal",
		avatar: "https://cdn.ticketswap.com/public/201601/e36b0348-cdc3-408d-a020-968a90ddbba9.jpeg",
		event: "Kensington",
		tickets: 2
	},
	{
		name: "Nikki",
		avatar: "https://cdn.ticketswap.com/public/201707/76a10f7c-4707-4f66-a70f-8428d240a382.png",
		event: "Kendrick Lamar - The Damn. Tour",
		tickets: 3
	},
	{
		name: "Mark",
		avatar: "https://cdn.ticketswap.com/public/201709/e6d4f11b-ac8b-4ee3-8a6d-04d1e34bc65f.png",
		event: "Shakira - El Dorado World Tour",
		tickets: 10
	},
	{
		name: "Lauren",
		avatar: "https://cdn.ticketswap.com/public/201608/92326b92-ce4d-4cf3-8d69-032687a44a51.png",
		event: "Freaqshow 2017",
		tickets: 2
	},
	{
		name: "Bob",
		avatar: "https://cdn.ticketswap.com/public/201601/d7ca4794-ce30-48fa-8753-3327c9ce713c.jpeg",
		event: "Imagine Dragons - Evolve World Tour",
		tickets: 5
	},
	{
		name: "Tygra",
		avatar: "https://cdn.ticketswap.com/public/201707/b676dc31-66ba-4a55-aa0d-ba4f55dba7ac.png",
		event: "The Script",
		tickets: 1
	},
	{
		name: "Lucas",
		avatar: "https://cdn.ticketswap.com/public/201612/d8b4e303-ce95-477e-982f-9e5801c14a5c.png",
		event: "Depeche Mode - Global Spirit Tour",
		tickets: 3
	}
];

$("button").click(function() {
	if (counterIndex >= notifications.length) {
		$(".notifications-empty").addClass("active");

		setTimeout(function() {
			$(".notifications-empty").removeClass("active");
		}, 2000);
	} else {
		const notificationElement = `<li class="notification-element">
            <img class="profile-image" src="${notifications[counterIndex].avatar}" alt="Profile image">
            <div class="profile-details">
                <h3>${notifications[counterIndex].name}<span class="profile-selling"> — Selling ${notifications[
			counterIndex
		].tickets} tickets</span></h3>
                <p class="profile-event">${notifications[counterIndex].event}</p>
            </div>
            <svg class="icon-exit" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
              <path fill="#001319" fill-opacity=".4" fill-rule="evenodd" d="M342.975526,17 L346.798345,13.1771803 C347.067218,12.9083075 347.067218,12.4705274 346.798345,12.2016546 C346.529473,11.9327818 346.091693,11.9327818 345.82282,12.2016546 L342,16.0244743 L338.17718,12.2016546 C337.908307,11.9327818 337.470527,11.9327818 337.201655,12.2016546 C336.932782,12.4705274 336.932782,12.9083075 337.201655,13.1771803 L341.024474,17 L337.205102,20.8193726 C336.936229,21.0882454 336.936229,21.5260255 337.205102,21.7948983 C337.339538,21.9293347 337.51534,21.9982765 337.691141,21.9982765 C337.866942,21.9982765 338.042744,21.9293347 338.17718,21.7948983 L342,17.9720786 L345.82282,21.7948983 C345.957256,21.9293347 346.133058,21.9982765 346.308859,21.9982765 C346.48466,21.9982765 346.660462,21.9293347 346.794898,21.7948983 C347.063771,21.5260255 347.063771,21.0882454 346.794898,20.8193726 L342.975526,17 Z" transform="translate(-337 -12)"/>
            </svg>
            </li>`;

		$(notificationElement)
			.hide()
			.appendTo(".notifications-list")
			.fadeIn(1000, "linear");

		counterIndex += 1;
		deletingItem();
	}
});

// Deleting Notification
const deletingItem = () => {
	$(".icon-exit").click(function(event) {
		event.stopPropagation();
		$(this)
			.parent()
			.fadeOut(400, function() {
				$(this).remove();
			});
	});
};
