export async function POST(req) {
  try {
    const body = await req.json();

    const googleRes = await fetch(
           "https://script.google.com/macros/s/AKfycbxvBaxxo-uEEaFscKthMVcNu9wi-hu5qbs8uNt99xyrmfPNyRs8aBVNeQi4-evZYAqwdQ/exec",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!googleRes.ok) {
      return Response.json(
        { success: false, error: "Google Script Error" },
        { status: 500 }
      );
    }

    const data = await googleRes.json();

    return Response.json(data);

  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}