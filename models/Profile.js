class Profile {

	constructor(profile) {
		this.id = profile._id;
		this.ageMax = profile.age_filter_max;
		this.ageMin = profile.age_filter_min;
		this.bio = profile.bio;
		this.birthdate = new Date(profile.birth_date);
		this.created = new Date(profile.create_date);
		this.discoverable = profile.discoverable;
		this.distanceFilter = profile.distance_filter;
		this.email = profile.email;
		this.gender = profile.gender;
		this.genderFilter = profile.gender_filter;
		this.name = profile.name;
		this.photos = profile.photos.map((photo) => photo.url);
		this.showGender = profile.show_gender_on_profile;
		this.canCreateSquad = profile.can_create_squad;
		this.position = profile.pos;
	}

}

module.exports = Profile;
