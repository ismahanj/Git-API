const repo = document.getElementById('repo')


function getResults(){
 fetch("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc")
 .then(res => res.json())
 .then(data => {
    repo.innerHTML = '<img src = "${data.items.owner.avatar_url">'
 })

}