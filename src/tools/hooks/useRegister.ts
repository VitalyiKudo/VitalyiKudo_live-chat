import { useEffect } from 'react';

export const useRegister = (user: any) => {
    useEffect(() => {
        function fetching () {
            fetch('https://api.barbarossa.pp.ua/users/register', {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: user }),
            });
        }
        fetching();
    }, [ user ]);
};

