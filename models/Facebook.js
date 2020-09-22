class FacebookInfo {

	constructor(facebook) {
		this.connectionCount = facebook.connection_count;
		this.commonConnections = facebook.common_connections;
		this.commonInterests = facebook.common_interests;
	}

}

module.exports = FacebookInfo;