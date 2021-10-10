const users = [
	{
		id: 1,
		name: "Mosh",
		email: "mosh@domain.com",
		password: "12345",
		BirthDate: "1992-8-02",
		gender: "Male",
		Job: "Teacher",
		Location: "Colombo",
		images: { fileName: "macbook" },
	},
	{
		id: 2,
		name: "Nanduni",
		email: "nanduni@domain.com",
		password: "12345",
		BirthDate: "1992-8-02",
		gender: "Male",
		Job: "Teacher",
		Location: "Colombo",
		images: { fileName: "macbook" },
	},
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
	user.id = users.length + 1;
	users.push(user);
};

const getUserByIdAndReplace = (id, user) => {
	const user1 = users.find((user) => user.id === id);

	const index = users.indexOf(user1);
	languages.splice(index, index, user);
};
module.exports = {
	getUsers,
	getUserByEmail,
	getUserById,
	addUser,

	getUserByIdAndReplace,
};
