
-- This detects .webp images and converts them to .png automatically during rendering.
function Image(img)
  if img.src:match("%.webp$") then
    local png_src = img.src:gsub("%.webp$", ".png")
    os.execute("magick " .. img.src .. " " .. png_src)
    img.src = png_src
  end
  return img
end
