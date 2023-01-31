const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: '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'
});

export default async function retrieveRepos(){

return octokit.rest.repos.listForAuthenticatedUser();
}

