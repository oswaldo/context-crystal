class Ccrystal < Formula
  desc "Deterministic context preservation, DAG provenance, and runtime orchestration"
  homepage "https://github.com/oswaldo/context-crystal"
  version "1.0.1"
  license "MIT"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-aarch64.tar.gz"
      sha256 "a09ae5cd3b49bd1e73cb4719f99e3af728453fa45924403b7d20dd2d5146815d"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-x86_64.tar.gz"
      sha256 "b426f17ffe7e7bd905d37f6344728756bce918356964bcae2217159f04503a40"
    end
  end

  on_linux do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-aarch64.tar.gz"
      sha256 "059538cabb934ddfc4584420f66c0b2d81e09f4774f1da4444b09e87cac2aac0"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-x86_64.tar.gz"
      sha256 "6eef70516a0256a5f72538e8ef1a57824310bca4ef2591583e4563ba8f7f9193"
    end
  end

  def install
    bin.install "ccrystal"
  end

  test do
    assert_match "Context Crystal CLI", shell_output("#{bin}/ccrystal --help")
  end
end
