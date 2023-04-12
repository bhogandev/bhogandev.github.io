const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
});

export default async function retrieveRepos(){

return octokit.rest.repos.listForUser({username: 'bhogandev'});
}

