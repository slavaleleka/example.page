const TARGET_URL = 'http://example.com';

const redirect = () => {
    const { location } = window;
    debugger;
    location.replace(TARGET_URL);
};

redirect();
