export const POST = async (request) => {
  const data = await request.json();
  const response = await fetch("", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Content_Type: "application/json",
    },
  });
  const newAdmin = response.json();
  return Response.json({ msg: "" });
};
export const GET = async () => {};
