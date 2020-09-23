const login = (email, password) => {
    return async (dispatch) => {
        //const {auth: {email, password}} = getState();
        const response = await fetch(`/api/session`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state),
          });

          if (response.ok) {
            const { player } = await response.json();
            console.log(player);
          }
    }
}

export const thunks = {login}
