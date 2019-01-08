export default function() {
    return Promise.resolve({
      json: () =>
        Promise.resolve(
            {"cod":"400","message":"170 is not a float"}
            )
    })
  }