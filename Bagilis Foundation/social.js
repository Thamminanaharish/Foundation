function showDetails(activity) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');

    if (activity === 'activity1') {
        popupTitle.innerText = 'Community Clean-Up';
        popupDescription.innerText = 'Participate in our community clean-up events and make a positive impact on our environment by removing litter and promoting a cleaner, greener space.';
    } else if (activity === 'activity2') {
        popupTitle.innerText = 'Tree Plantation Drive';
        popupDescription.innerText = 'Join our tree plantation drives to contribute to a greener planet. Planting trees helps combat climate change, provides habitats for wildlife, and enhances the beauty of our surroundings.';
    } else if (activity === 'activity3') {
        popupTitle.innerText = 'Food Distribution';
        popupDescription.innerText = 'Help us distribute food to those in need. By volunteering, you can make a significant difference in the lives of the less fortunate in our community.';
    }

    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
