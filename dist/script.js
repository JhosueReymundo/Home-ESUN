console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");
	const cuartoCardEl = cardsContainerEl.querySelector(".cuarto--card");
	const quintoCardEl = cardsContainerEl.querySelector(".quinto--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");
	const cuartoBgImageEl = appBgContainerEl.querySelector(".cuarto--image");
	const quintoBgImageEl = appBgContainerEl.querySelector(".quinto--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");
		cuartoCardEl.classList.remove("cuarto--card");
		quintoCardEl.classList.remove("quinto--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");
		cuartoBgImageEl.classList.remove("cuarto--image");
		quintoBgImageEl.classList.remove("quinto--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";
			cuartoCardEl.style.zIndex = "1";
			quintoCardEl.style.zIndex = "1";

			nextBgImageEl.style.zIndex = "-1";

			/* currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card"); */

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("quinto--card");
			quintoCardEl.classList.add("cuarto--card");
			cuartoCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");
			
			

			/* currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image"); */

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("quinto--image");
			quintoBgImageEl.classList.add("cuarto--image");
			cuartoBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");

		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			
			currentCardEl.classList.add("next--card");
			nextCardEl.classList.add("cuarto--card");
			cuartoCardEl.classList.add("quinto--card")
			quintoCardEl.classList.add("previous--card")
			previousCardEl.classList.add("current--card");
			


			/* currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image"); */

			currentBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("cuarto--image");
			cuartoBgImageEl.classList.add("quinto--image")
			quintoBgImageEl.classList.add("previous--image")
			previousBgImageEl.classList.add("current--image");
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");
	let cuartoInfoEl=cardInfosContainerEl.querySelector(".cuarto--info");
	let quintoInfoEl=cardInfosContainerEl.querySelector(".quinto--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 0.5,
			pointerEvents: "none",
		})
		.to(
			currentInfoEl.querySelectorAll(".text"),
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "-120px",
				opacity: 0,
			},
			"-="
		)
		.call(() => {
			swapInfosClass(direction);
		})
		.call(() => initCardEvents())
		.fromTo(
			direction === "right"
				? nextInfoEl.querySelectorAll(".text")
				: previousInfoEl.querySelectorAll(".text"), 
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)

		.fromTo(
			direction === "right"
				? cuartoInfoEl.querySelectorAll(".text")
				: quintoInfoEl.querySelectorAll(".text"), 
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)


		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 1,
			pointerEvents: "all",
		});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");
		cuartoInfoEl.classList.remove("cuarto--info");
		quintoInfoEl.classList.remove("quinto--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("quinto--info");
			quintoInfoEl.classList.add("cuarto--info");
			cuartoInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("current--info");


			/* currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info"); */
		} else if (direction === "left") {

			/* currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info"); */

			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("cuarto--info");
			cuartoInfoEl.classList.add("quinto--info")
			quintoInfoEl.classList.add("previous--info")
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
			delay: 0.5,
			duration: 0.4,
			stagger: 0.1,
			opacity: 1,
			translateY: 0,
		})
		.to(
			[buttons.prev, buttons.next],
			{
				duration: 0.4,
				opacity: 1,
				pointerEvents: "all",
			},
			"-=0.4"
		);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
							duration: 0.8,
							opacity: 0,
							pointerEvents: "none",
						})
						.call(() => init());
				}
			}
		});
	});
};

/* document.addEventListener("DOMContentLoaded", function() {
	const whatsappButton = document.getElementById("whatsapp-button");

	window.addEventListener("scroll", function() {
		if (window.scrollY > 100) {
			whatsappButton.style.opacity = "1";
		} else {
			whatsappButton.style.opacity = "0";
		}
	});
}); */

const checkbox = document.querySelector("#toggle");
const app = document.querySelector(".app");
const main = document.querySelector("main");

checkbox.addEventListener("click", function () {
	app.style.transform = "translateY(200px)";
	app.style.transition = "transform 0.5s ease-in-out";

	main.style.transform = "translateY(200px)";
	main.style.transition = "transform 0.5s ease-in-out";
});

checkbox.addEventListener("change", function () {
	if (!checkbox.checked) {
		app.style.transform = "translateY(0)";
		app.style.transition = "transform 0.5s ease-in-out";

		main.style.transform = "translateY(0)";
		main.style.transition = "transform 0.5s ease-in-out";
	}
});


waitForImages();