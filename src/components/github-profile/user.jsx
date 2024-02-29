export function User({ user, repos }) {
  const {
    avatar_url,
    bio,
    login,
    location,
    followers,
    following,
    company,
    public_repos,
    html_url,
    name,
    created_at,
  } = user;

  let html_followers = `https://github.com/${login}?tab=followers`;
  let html_following = `https://github.com/${login}?tab=following`;

  function formatDate(dateString) {
    const fecha = new Date(dateString);
    const opcionesDeFormato = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return fecha.toLocaleDateString("es-ES", opcionesDeFormato);
  }

  console.log(repos);

  return (
    <div className="user">
      <div className="user-info">
        <img src={avatar_url} alt="User" />
        <div className="info">
          <span>
            <a href={html_url} target="blank" className="username">
              {login || name}
            </a>
          </span>
          <span>Se unió el {formatDate(created_at)}</span>
          <span>{bio}</span>
          <div className="svg">
            <svg
              width="25px"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z" />
            </svg>
            <span>
              <a href={html_followers} target="blank">
                {followers} followers
              </a>
            </span>
            <span>
              <a href={html_following} target="blank">
                {following} following
              </a>
            </span>
          </div>

          {company ? (
            <div className="svg">
              <svg
                width="25px"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1Z" />
                <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
              </svg>
              <span>{company}</span>
            </div>
          ) : (
            ""
          )}

          {location ? (
            <div className="svg">
              <svg
                width="25px"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>{location}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="user-repositorio">
        {repos.length !== 0 ? (
          <div className="repos">
            <span>Total de repositorios: {public_repos}</span>
            {repos.slice(0, 3).map((repo) => (
              <div key={repo.id} className="repo">
                <div className="repo-titulo">
                  <div className="titulo">
                    <a href={repo.html_url} target="blank">
                      {repo.name}
                    </a>
                    <div>
                      <span>{repo.visibility}</span>
                    </div>
                  </div>
                  <p>{formatDate(repo.created_at)}</p>
                </div>
                <div className="detalles">
                  {repo.language ? (
                    <div className="svg">
                      <svg
                        width="25px"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm-.3 9.3c.4.4.4 1 0 1.4L9.4 14l1.3 1.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 0 1 1.4 0Zm2.6 1.4a1 1 0 0 1 1.4-1.4l2 2c.4.4.4 1 0 1.4l-2 2a1 1 0 0 1-1.4-1.4l1.3-1.3-1.3-1.3Z"
                        />
                      </svg>
                      <span>{repo.language}</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="svg">
                    <svg
                      width="25px"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                    <span>{repo.stargazers_count}</span>
                  </div>
                  {repo.homepage ? (
                    <div className="svg">
                      <svg
                        width="25px"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"
                        />
                      </svg>
                      <a href={repo.homepage} target="blank">
                        <span>{repo.homepage}</span>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>El usuario no tiene repositorios</p>
        )}
      </div>
    </div>
  );
}
