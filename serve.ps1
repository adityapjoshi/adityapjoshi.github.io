$listener = [System.Net.HttpListener]::new()
# What: this script starts a tiny local web server for the portfolio.
# How: PowerShell listens on localhost and serves files from the repo folder.
# End result: you can test the site in a browser at http://127.0.0.1:8000/.
$listener.Prefixes.Add('http://127.0.0.1:8000/')
$listener.Start()

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
    $full = Join-Path 'C:\Dev\Repos\adityapjoshi.github.io' $path

    if (Test-Path $full -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($full)
      if ($full.EndsWith('.html')) { $context.Response.ContentType = 'text/html; charset=utf-8' }
      elseif ($full.EndsWith('.css')) { $context.Response.ContentType = 'text/css; charset=utf-8' }
      elseif ($full.EndsWith('.js')) { $context.Response.ContentType = 'application/javascript; charset=utf-8' }
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $context.Response.StatusCode = 404
    }

    $context.Response.OutputStream.Close()
  }
}
finally {
  $listener.Stop()
  $listener.Close()
}
