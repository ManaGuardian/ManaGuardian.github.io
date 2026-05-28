module.exports = async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.setInputDirectory(".");
	
	eleventyConfig.setIncludesDirectory("_includes");
	eleventyConfig.setLayoutsDirectory("_layouts");
	
	eleventyConfig.addPassthroughCopy({ "css/General_Style.css": "css/General_Style.css" });
	
	eleventyConfig.addPassthroughCopy({ "images": "images" });
	eleventyConfig.addPassthroughCopy({ "audio": "audio" });
	eleventyConfig.addPassthroughCopy({ "fonts": "fonts" });
};
