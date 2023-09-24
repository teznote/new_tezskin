Jekyll::Hooks.register :pages, :post_render do |page|
    sleep(2)
end