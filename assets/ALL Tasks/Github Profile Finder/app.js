let userInput = document.getElementById('user-input');
let mainContent = document.getElementById('mainContent');
let errorMsg = document.getElementById('error-msg');

// =========================================================
// =========================================================
// =========================================================


async function searchUser() {
    let username = userInput.value.trim();
    if (!username) return;



    try {
        // Reset UI
        errorMsg.classList.add('hidden');

        // Fetch Profile
        let userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('User not found');
        let user = await userRes.ok ? await userRes.json() : null;

        // Fetch Repos
        let reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        let repos = await reposRes.json();

        updateUI(user, repos);
        mainContent.classList.remove('hidden');
        mainContent.classList.add('grid');
    }

    catch (err) {
        mainContent.classList.add('hidden');
        errorMsg.classList.remove('hidden');
    }
}





function updateUI(user, repos) {
    // Sidebar info
    document.getElementById('profile-img').src = user.avatar_url;
    document.getElementById('name').textContent = user.name || user.login;
    document.getElementById('login').textContent = `@${user.login}`;
    document.getElementById('bio').textContent = user.bio || "This traveler has no bio yet.";
    document.getElementById('followers').textContent = formatNum(user.followers);
    document.getElementById('following').textContent = formatNum(user.following);
    document.getElementById('reposCount').textContent = user.public_repos;
    document.getElementById('profile-link').href = user.html_url;

    // Conditional info
    toggleElement('location', user.location, 'locationBox');
    toggleElement('twitter', user.twitter_username, 'twitterBox');

    let blog = document.getElementById('blog');
    if(user.blog) {
        blog.textContent = user.blog.replace(/^https?:\/\//, '');
        blog.href = user.blog.startsWith('http') ? user.blog : `https://${user.blog}`;
        document.getElementById('blogBox').classList.remove('hidden');
    }else {
        document.getElementById('blogBox').classList.add('hidden');
    }



    // Repos Grid
    let grid = document.getElementById('repos-grid');
    grid.innerHTML = '';

    let stars = 0, forks = 0, langs = {};

    repos.forEach(repo => {
        stars += repo.stargazers_count;
        forks += repo.forks_count;
        if (repo.language) langs[repo.language] = (langs[repo.language] || 0) + 1;

        let card = document.createElement('a');
        card.href = repo.html_url;
        card.target = "_blank";
        card.className = "repo-card";
        card.innerHTML = `
                        <div class="repo-name">${repo.name}</div>
                        <p class="repo-desc">${repo.description || 'No description provided.'}</p>

                        <div class="repo-info">
                            <span>🟡 ${repo.language || 'Plain'}</span>
                            <span>⭐ ${repo.stargazers_count}</span>
                            <span>🍴 ${repo.forks_count}</span>
                        </div>
                `;
        grid.appendChild(card);
    });


    // Bottom Stats
    document.getElementById('total-stars').textContent = stars;
    document.getElementById('total-forks').textContent = forks;
    document.getElementById('license-count').textContent = repos.filter(r => r.license).length;

    let topLang = Object.entries(langs).sort((a, b) => b[1] - a[1])[0];
    document.getElementById('top-lang').textContent = topLang ? topLang[0] : '-';
}



function toggleElement(id, value, boxId) {
    let el = document.getElementById(id);
    let box = document.getElementById(boxId);
    if (value) {
        el.textContent = value;
        box.classList.remove('hidden');
    } else {
        box.classList.add('hidden');
    }
}



function formatNum(num) {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
}






userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchUser();
});

document.getElementById('search-btn').addEventListener('click', searchUser);


window.onload = () => {
    userInput.value = "github";
    searchUser();
};