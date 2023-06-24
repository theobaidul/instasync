import { useAuthenticatedFetch } from '../hooks';

export default function UsersCard() {
    const appQuery = useAuthenticatedFetch();

    const handleCreate = async () => {
        const newUser = {
            name: 'Md Obaidul Islam',
            email: 'theobaidul@gmail.com',
            phone: '01977008772',
        };
        const response = await appQuery('/api/user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <button type="button" onClick={handleCreate}>
                Create New User
            </button>
        </div>
    );
}
