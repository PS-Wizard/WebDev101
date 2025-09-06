export async function load() {
    await new Promise((res) => setTimeout(res, 4000));
    return {
        somestuff: "abc",
    }

}
