document.getElementById("run").addEventListener("click", () => {
  const bpInput = document.getElementById("bp");
  const xoff = parseFloat(document.getElementById("xoff").value) || 0;
  const yoff = parseFloat(document.getElementById("yoff").value) || 0;

  let data;

  try {
    data = JSON.parse(bpInput.value);
  } catch {
    alert("invalid JSON");
    return;
  }

  // loop parts
  data.parts.forEach(part => {
    // move position
    if (part.p) {
      part.p.x += xoff;
      part.p.y += yoff;
    }

    // disable engine heat
    if (part.B && part.B.heat_on__for_creative_use !== undefined) {
      part.B.heat_on__for_creative_use = false;
    }
  });

  // output back
  bpInput.value = JSON.stringify(data);

  alert("done");
});
