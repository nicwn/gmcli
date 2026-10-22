export interface EmailAccount {
	email: string;
	issuedAt?: string;
	oauth2: {
		clientId: string;
		clientSecret: string;
		refreshToken: string;
		accessToken?: string;
	};
}
