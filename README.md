# GitHub Pages Deployment

This branch contains the built documentation for deployment to GitHub Pages.

## Next Steps

To deploy this to GitHub Pages:

1. **Push the gh-pages branch to your repository:**

   ```bash
   git push origin gh-pages
   ```

2. **Configure GitHub Pages in your repository settings:**

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select the `gh-pages` branch
   - Click Save

3. **Access your documentation:**
   - Your docs will be available at: `https://<username>.github.io/<repository-name>/`
   - For this repository: `https://ruanyl.github.io/oui/`

## Updating the Documentation

When you need to update the docs:

1. Switch to your main branch and rebuild the docs:

   ```bash
   git checkout main  # or your main branch name
   yarn build-docs    # or your build command
   ```

2. Switch to gh-pages and update:
   ```bash
   git checkout gh-pages
   cp -r docs/* .
   git add .
   git commit -m "docs: Update documentation"
   git push origin gh-pages
   ```

## Branch Structure

- This branch contains only the built documentation files
- No source code or build configuration is included
- The branch is independent from your main development branch
