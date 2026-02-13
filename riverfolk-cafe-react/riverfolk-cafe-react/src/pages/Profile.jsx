function Profile() {
  return (
    <main>
      <h2>User Profile</h2>

      <div id="profileContent">
        <p><strong>First Name:</strong> <span id="displayFirstName">John</span></p>
        <p><strong>Last Name:</strong> <span id="displayLastName">Doe</span></p>
        <p><strong>Email Address:</strong> <span id="displayEmail">johndoe@example.com</span></p>
        <p><strong>Mobile Number:</strong> <span id="displayMobile">+63 912 345 6789</span></p>
        <p><strong>Home Address:</strong> <span id="displayAddress">123 Main Street, Marikina City</span></p>
      </div>

      <p id="profileMessage" style={{ color: 'red' }}></p>
    </main>
  )
}

export default Profile
