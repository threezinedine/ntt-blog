function visit(path: string) {
	cy.fixture('host').then((host) => {
		const prefix: string = path.startsWith('/') ? '' : '/';
		cy.visit(`${host.host}${prefix}${path}`);
	});
}

function assertFullUrl(path: string) {
	cy.fixture('host').then((host) => {
		const prefix: string = path.startsWith('/') ? '' : '/';
		cy.url().should('eq', `${host.host}${prefix}${path}`);
	});
}

export { visit, assertFullUrl };
